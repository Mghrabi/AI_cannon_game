class Network {
    constructor(arr_neurons){
        this.layers = new Array(arr_neurons.length);
        // console.log('this is what a layers are ', this.layers);
        for (let i=0; i<arr_neurons.length; i++){
            //we won't create a layer for the inputs layer (sensors + cannon_angle)
            if(i==0){
                //we manually defined the number of sensors we have so far + cannon_angle as input
                this.layers[i] = new Layer(arr_neurons[i], 8 + 1)
                continue
            }
            this.layers[i] = new Layer(arr_neurons[i], arr_neurons[i-1])
        }
    }

    forward(input){
        //compute layers and get the output
        // console.log('this.layers', this.layers)
        Layer.compute(input, this.layers[0]);
        for (let i=1; i<this.layers.length; i++) {
            Layer.compute(this.layers[i-1].outputs, this.layers[i]) 
        }
        return this.layers[this.layers.length - 1].outputs
    }

}

class Layer {
    constructor(n_neurons, n_previous) {
        //n_0 is number of neurons of layer 0 
        //previous = n_0 * m_examples (m_examples will be of 1 in game training)
        //this layer =>  weights_of_this_layer = n_1 * n_0
        //then we can apply mutrix multiplication between this l_1 * l_0_ouput 

        this.n_neurons = n_neurons;
        this.n_features = n_previous;

        this.inputs = new Array(this.n_features);
        this.outputs = Array.apply(null, new Array(this.n_neurons));

        this.weights = new Array(n_neurons); //will be an array inside an array
        this.weights.fill(new Array(this.n_features))

        this.biases = new Array(this.n_neurons);

        Layer.#initialize(this);
    }

    static #initialize(layer) {
        for (let i = 0; i < layer.n_neurons; i++) {
            for (let j = 0; j < layer.n_features; j++) {
                layer.weights[i][j] = Math.random() * 2 - 1; //random values between -1, 1
            }
            layer.biases[i] = Math.random() * 2 - 1; //random values between -1, 1
        }
    }

    static compute(input, layer){
        for (let i=0; i<layer.n_features; i++){
            layer.inputs[i] = input[i];
        }
        for (let i=0; i<layer.n_neurons; i++){
            let value = 0;
            for (let j=0; j<layer.n_features; j++){
                value += layer.weights[i][j] * layer.inputs[j];
                // console.log(typeof(value))
            }
            value+=layer.biases[i];
            // console.log('value', typeof(value))
            if(value>0){
                layer.outputs[i] = 1;
            }else {
                layer.outputs[i] = 0;
            }
        }
       return layer.outputs; 
        
        
    }

}