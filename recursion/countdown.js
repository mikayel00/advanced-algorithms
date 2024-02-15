function countdown(num) {
    if (num <= 0) {
        return;
    }
    console.log(num);
    --num;
    countdown(num);
}

countdown(10);
