/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const dfs = (graph, invGraph, finished, course) => {
    if (finished[course]) { return 0; }
    
    if (graph[course].every(p => finished[p])) {
        finished[course] = true;
        
        let total = 1, neighbors = invGraph[course] || [];
        
        for (let c of neighbors) {
            total += dfs(graph, invGraph, finished, c)
        }
        
        return total;
    }
    
    return 0;
}

const canFinish = (numCourses, prerequisites) => {
    let finished = {}, graph = {}, invGraph = {}, total = 0;
    
    for (let pre of prerequisites) {
        let c = pre[0], p = pre[1];
        
        if (!graph[c]) { graph[c] = []; }
        if (!invGraph[p]) { invGraph[p] = []; }
        
        graph[c].push(p);
        invGraph[p].push(c);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!graph[i]) {
            finished[i] = true;
            total++;
        }
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!finished[i]) {
            total += dfs(graph, invGraph, finished, i);
        }
    }
    
    return total === numCourses;
};
