/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
    // let hasN = false
    // for (let i = 0; i < flights.length; i++) {
    //     if (flights[i][1] === n) {
    //         hasN = true
    //     }
    // }

    // if (!hasN) {
    //     return -1
    // }

    let map = {}

    for (let i = 0; i < flights.length; i++) {
        if (map[flights[i][0]]) {
            map[flights[i][0]].push([flights[i][1], flights[i][2], flights[i][2], K])
        } else {
            map[flights[i][0]] = [[flights[i][1], flights[i][2], flights[i][2], K]]
        }
    }

    //console.log(map)

    if (!map[src]) {
        return -1
    }
    let queue = [...map[src]]

    let len = queue.length

    let minPrice = Infinity

    while (queue.length) {
        let added = 0
        while (len--) {
            let edge = queue.pop()
            //let price = edge[1]
            let sum = edge[2]
            let kLeft = edge[3]
            //console.log('edge', edge)
            const connections = map[edge[0]]

            if (edge[3] > 0) {
                if (connections) {
                    for (let j = 0; j < connections.length; j++) {
                        if (kLeft >= 0) {

                            let connection = connections[j]
                            // console.log('connection', edge[0], connection, dst)
                            if (connection[0] === dst) {
                                minPrice = Math.min(connection[1] + sum, minPrice)
                                continue
                            }
                            connection[2] = connection[1] + sum
                            connection[3] = kLeft--
                            queue.unshift(connection)
                            added++
                        }
                    }
                }
            } else {

                if (edge[0] === dst) {
                    minPrice = Math.min(sum, minPrice)
                }

            }


        }

        len = added
    }

    return minPrice === Infinity ? -1 : minPrice

};

console.log(findCheapestPrice(3,
    [[0, 1, 100], [1, 2, 100], [0, 2, 500]],
    0,
    2,
    0))

console.log(findCheapestPrice(3,
    [[0, 1, 100], [1, 2, 100], [0, 2, 500]],
    0,
    2,
    1))

console.log(findCheapestPrice(5,
    [[4, 1, 1], [1, 2, 3], [0, 3, 2], [0, 4, 10], [3, 1, 1], [1, 4, 3]],
    2,
    1,
    1))


