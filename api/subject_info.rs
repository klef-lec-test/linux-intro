use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};
use std::time;
use postgres;

#[derive(Serialize, Deserialize)]
pub struct SubjectInfo {
    subject: String,
    teacher: String,
    kadai: Kadai,
    info: Info
}

pub struct Kadai {
    subject: String,
    name: String,
    range: String,
    deadline: time
}

pub struct Info {
    subject: String,
    description: String,
    date: time
}


#[wasm_bindgen]
pub fn subject_info(subject: String) -> SubjectInfo {
    println!("Hello,wasm")
}