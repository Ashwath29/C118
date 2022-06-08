timer_counter = 0;
timer_check = "";
draw_sketch = "";
answer_holder = "";
score = 0;

function setup() {
    Canvas = createCanvas(300,300);
    Canvas.position(600,200);
}

function draw() {
    check_sketch()
    if(draw_sketch == sketch) {
        answer_holder = "set"
        score++;
        document.getElementById("score").innerHTML = "Score" + score;
    }
}

function updateCanvas() {
    background('white');
    random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    console.log(quick.quick_draw_data_set[random_number]);
    sketch = quick_draw_data_set[random_number];
    document.getElementById("sketch_name").innerHTML = "skecth to be drawn" + sketch;
}

function check_sketch() {
    timer_counter++;
    document.getElementById("time").innerHTML = "timer;" + timer_counter;
    console.log(timer_counter);
    if(timer_counter>400) {
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed"||answer_holder == "set") {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}