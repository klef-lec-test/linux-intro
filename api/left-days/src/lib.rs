use chrono::{DateTime, Duration, Local, TimeZone};
use serde_json::json;
use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern "C" {
//     pub fn alert(s: &str);
// }

// #[wasm_bindgen]
// pub fn greet(name: &str) {
//     alert(&format!("Hello, {}!", name));
// }

#[wasm_bindgen]
struct Left {
    left_days: i64,
}

#[wasm_bindgen]
impl Left {
    pub fn left() -> Self {
        let today: DateTime<Local> = Local::now();
        let limit: DateTime<Local> = Local.with_ymd_and_hms(2024, 2, 8, 23, 59, 59).unwrap();
        let left: Duration = limit - today;
        Self {
            left_days: left.num_days(),
        }
    }
}
