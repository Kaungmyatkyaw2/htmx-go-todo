package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {

	err := openDB()

	if err != nil {
		log.Panic(err.Error())
	}

	defer closeDB()

	err = setupDB()

	if err != nil {
		log.Panic(err.Error())
	}

	err = parseTemplates()
	if err != nil {
		log.Panic(err.Error())
	}
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Handle("/static/*", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	r.Get("/", handleGetTasks)
	r.Post("/tasks", handleCreateTask)
	r.Delete("/tasks/{id}", handleDeleteTask)
	r.Put("/tasks/{id}", handleUpdateTask)

	r.Get("/tasks/{id}/edit", handleEditTask)

	r.Put("/tasks/{id}/toggle", handleToggleTask)
	r.Put("/tasks/order", handleOrderTasks)

	http.ListenAndServe("localhost:3000", r)
}
