/**
 * - querySelector
 *   -
 */
(function() {
    const button = document.querySelector("#btn");
    const body = document.querySelector("body");
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const value = document.querySelector("#hex-value");

    // button.addEventListner("click", changeHex);
    document.getElementById("btn").addEventListner("click", changeHex);

    function changeHex() {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            // const : ?? 생성과 동시에 초기화
            const index = Math.floor(Math.floor(Math.random() * hexValues.length));
            hex += hexValues[index];
            console.log(`${index} : ${hex}`);
        }
        value.textContent = hex;
        body.style.backgroundColor = hex;
    }
})();