package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func handleGetTasks(w http.ResponseWriter, _ *http.Request) {
	items, err := fetchTasks()
	if err != nil {
		log.Printf("error fetching tasks %v\n", err)
	}

	count, err := fetchCount()
	if err != nil {
		log.Printf("error fetching count %v\n", err)
	}

	completedCount, err := fetchCompletedCount()
	if err != nil {
		log.Printf("error fetching completed count %v\n", err)
	}

	data := Tasks{
		Items:          items,
		Count:          count,
		CompletedCount: completedCount,
	}

	tmpl.ExecuteTemplate(w, "Base", data)

}

func handleCreateTask(w http.ResponseWriter, r *http.Request) {

	title := r.FormValue("title")

	if title == "" {
		tmpl.ExecuteTemplate(w, "Form", nil)
		return
	}

	item, err := insertTask(title)
	if err != nil {
		log.Printf("error inserting task %v\n", err)
		return
	}

	count, err := fetchCount()
	if err != nil {
		log.Printf("error fetching count %v\n", err)
		return
	}
	w.WriteHeader(http.StatusCreated)
	tmpl.ExecuteTemplate(w, "Form", nil)
	tmpl.ExecuteTemplate(w, "Item", map[string]any{"Item": item, "SwapOOB": true})
	tmpl.ExecuteTemplate(w, "TotalCount", map[string]any{"Count": count, "SwapOOB": true})

}

func handleToggleTask(w http.ResponseWriter, r *http.Request) {

	id, err := strconv.Atoi(chi.URLParam(r, "id"))

	if err != nil {
		log.Printf("error parsing id %v\n", err)
		return
	}

	_, err = toggleTask(id)

	if err != nil {
		log.Printf("error toggling task %v\n", err)
		return
	}
	completedCount, err := fetchCompletedCount()

	if err != nil {
		log.Printf("error fetching completed count %v\n", err)
	}

	tmpl.ExecuteTemplate(w, "CompletedCount", map[string]any{
		"Count":   completedCount,
		"SwapOOB": true,
	})

}

func handleDeleteTask(w http.ResponseWriter, r *http.Request) {

	id, err := strconv.Atoi(chi.URLParam(r, "id"))

	if err != nil {
		log.Printf("error parsing id %v\n", err)
		return
	}

	err = deleteTask(r.Context(), id)

	if err != nil {
		log.Printf("error deleting task %v\n", err)
		return
	}

	count, err := fetchCount()
	if err != nil {
		log.Printf("error fetching count %v\n", err)
	}

	completedCount, err := fetchCompletedCount()
	if err != nil {
		log.Printf("error fetching completed count %v\n", err)
	}

	tmpl.ExecuteTemplate(w, "TotalCount", map[string]any{"Count": count, "SwapOOB": true})
	tmpl.ExecuteTemplate(w, "CompletedCount", map[string]any{"Count": completedCount, "SwapOOB": true})

}

func handleEditTask(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))

	if err != nil {
		log.Printf("error parsing id %v\n", err)
		return
	}

	task, err := fetchTask(id)

	if err != nil {
		log.Printf("error fetching task with id-%d %v\n", id, err)
		return
	}

	tmpl.ExecuteTemplate(w, "Item", map[string]any{
		"Item":    task,
		"Editing": true,
	})
}

func handleUpdateTask(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))

	if err != nil {
		log.Printf("error parsing id %v\n", err)
		return
	}

	title := r.FormValue("title")

	if title == "" {
		return
	}

	task, err := updateTask(id, title)

	if err != nil {
		log.Printf("err update task with id-%d %v\n", id, err)
	}

	tmpl.ExecuteTemplate(w, "Item", map[string]any{
		"Item": task,
	})
}

func handleOrderTasks(_ http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		log.Printf("error parsing form %v,\n", err)
		return
	}

	var values []int

	fmt.Println(r.Form)

	for k, v := range r.Form {
		if k == "item" {
			for _, id := range v {
				value, err := strconv.Atoi(id)

				if err != nil {
					log.Printf("error parsing id into int")
					return
				}

				values = append(values, value)
			}
		}
	}

	err = orderTasks(r.Context(), values)

	if err != nil {
		log.Printf("error ordering tasks %v\n", err)
	}
}
