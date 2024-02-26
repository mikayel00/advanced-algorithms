const src = {
    "leaf1": 90,
    "leaf2": 100,
    "container1_1": [1, 2, 5, 1111],
    "contaiddner1_1": [1, 2, 5, 1000000000],
    "node1": {
        "leaf1_1": [
            1,
            99,
            1,
            22,
            10,
            {
                'array': 100000000,
            }
        ],
        "container1_1": [1, 2, 5, 1111],
    },
    "node2": {
    "container2_1": [
        9,
        7,
        11,
        -99,
        {
            "leaf_1_a": 200,
            "container_1_a": [20, 30, 401],
        },
    ],
        "empty_node2_2": {},
},
    "node2_a": {
    "leaf_2a_1": 300,
        "leaf_za_2": 200,
        "node_2a_3": {
        "node_z": {
            "leaf": 1000,
                "container3": [
                2000,
                {"leaf_c": 9000},
                1000,
                [99999999],
                {
                    "ape": [9, 199999, 90, 0]
                },
            ],
        },
    },
},
}

function parse(src) {
    let max = -Infinity;
    let values = Object.values(src);
    console.log(values);

    function helper(arr) {
        if (!arr.length) return max;
        if (typeof arr[0] === 'number') {
            max = Math.max(max, arr[0]);
        } else {
            let a = Math.max(max, parse(arr[0]));
            if (a > max) max = a;
        }
        helper(arr.slice(1));
    }
    helper(values);

    // for (let element of values) {
    //     if (typeof element === 'number') {
    //         max = Math.max(max, element);
    //     } else {
    //         let a = Math.max(max, parse(element));
    //         if (a > max) max = a;
    //     }
    // }

    return max;
}

console.log(parse(src));
