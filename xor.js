//input 1 0 , output 1
//input 1 1 , output 0 

const net = new brain.NeuralNetwork({hiddenLayers: [3]});

const trainingData = [
    {input: [0,0], output: [0]},
    {input: [0,1], output: [1]},
    {input: [1,0], output: [1]},
    {input: [1,1], output: [0]}
];

net.train(trainingData);

function run(){
    const firstInput = document.querySelector("#firstInput").value;
    const secondInput = document.querySelector("#secondInput").value;
    const result = document.querySelector("#result");
    // Error if the inputs are greater than 1.
    if (firstInput > 1 || secondInput > 1){
        result.textContent = "Error. You entered a number greater than 1.";
        // Append image if it doesn't exist.
        if (!document.querySelector("img")){
            const error = document.createElement("img");
            error.setAttribute("src","images.jpg");
            document.querySelector("#main").appendChild(error);
        }
        return
    }
    // Error if the inputs are less than 0.
    else if (firstInput < 0 || secondInput < 0){
        result.textContent = "Error. You entered a number less than 0.";
        if (!document.querySelector("img")){
            const error = document.createElement("img");
            error.setAttribute("src","images.jpg");
            document.querySelector("#main").appendChild(error);
        }
        
        return
    }
    result.textContent = Math.round(net.run([firstInput,secondInput]));
    if (document.querySelector("img")){
        const img = document.querySelector("img");
        img.remove();
    }
}