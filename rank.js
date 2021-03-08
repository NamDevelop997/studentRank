function rank() {
    let math = 9;
    let physical = 7;
    let chemistry = 9;
    const pointNumber = countAverage(math, physical, chemistry);

    if (math < 0 || physical < 0 || chemistry < 0) {
        return console.log("dữ liệu sai!");
        
    } else if (pointNumber < 5) {
        console.log("Yếu");
    }
    else if (pointNumber > 5 && pointNumber <= 6) {
        console.log("Trung bình");
    }
    else if (pointNumber > 6 && pointNumber <= 7) {
        console.log("Trung bình khá");
    }
    else if (pointNumber > 7 && pointNumber <= 8) {
        console.log("Khá");
    }
    else if (pointNumber > 8 && pointNumber <= 9) {
        console.log("Giỏi");
    }
    else if (pointNumber > 9 && pointNumber <= 10) {
        console.log("Xuất sắc");
    }

}


