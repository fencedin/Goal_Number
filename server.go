package main

import (
  "log"
  "net/http"
  "os"
)

func main() {
        log.Fatal(http.ListenAndServe(":" + os.Getenv("PORT"),
          http.FileServer(http.Dir("./app"))))
}
