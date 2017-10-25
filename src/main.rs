#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;
extern crate socket_io;

use socket_io::server::Server;
use std::io;
use std::thread;
use rocket::response::NamedFile;

static STATIC_INDEX_PATH: &'static str = "./client/index.html";

#[get("/")]
fn index() -> io::Result<NamedFile> {
     NamedFile::open(STATIC_INDEX_PATH)
}

fn main() {
    thread::spawn(move ||{
        let mut _server = Server::new();
    });
    rocket::ignite().mount("/", routes![index]).launch();
}