use chrono::{DateTime, Duration, Local, TimeZone};
use serde_json::json;
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(days_left).await
}

fn left() -> i64 {
    let today: DateTime<Local> = Local::now();
    let limit: DateTime<Local> = Local.with_ymd_and_hms(2024, 2, 8, 23, 59, 59).unwrap();
    let left: Duration = limit - today;
    let left_days: i64 = left.num_days();
    return left_days;
}

async fn days_left(_req: Request) -> Result<Response<Body>, Error> {
    Ok(Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .body(
            json!({
                "days_left": left()
            })
            .to_string()
            .into(),
        )?)
}
