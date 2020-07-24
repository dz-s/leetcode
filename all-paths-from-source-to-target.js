var allPathsSourceTarget = function(graph) {
    if(!graph.length){
        return []
    }
    const N = graph.length
    let queue = graph[0].map(el => [el, [0]])
    //console.log(queue)
    let paths = []
    while(queue.length){
        let [node, way] = queue.pop()
        if(node === N-1){
            paths.push(way.concat([node]))
        } else {
            graph[node].forEach(next => {
                queue.push([next, way.concat([node])])
            })
        }  
    }
    
    return paths
};
