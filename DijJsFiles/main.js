
import WeightedGraph from "./algo.js";
var graph = new WeightedGraph();
graph.addVertex("HYDERABAD");
graph.addVertex("CHENNAI");
graph.addVertex("BOMBAI");
graph.addVertex("DELHI");
graph.addVertex("KOLKATA");
graph.addVertex("KOCHI");

graph.addEdge("HYDERABAD", "CHENNAI", 4);
graph.addEdge("HYDERABAD", "BOMBAI", 2);
graph.addEdge("CHENNAI", "KOLKATA", 3);
graph.addEdge("BOMBAI", "DELHI", 2);
graph.addEdge("BOMBAI", "KOCHI", 4);
graph.addEdge("DELHI", "KOLKATA", 3);
graph.addEdge("DELHI", "KOLKATA", 1);
graph.addEdge("KOLKATA", "KOCHI", 1);
  let path=[]
  function findRoute()
  {
    let start=document.getElementById("id1").value.toUpperCase();
    let end=document.getElementById("id2").value.toUpperCase();
    console.log(start,end)
    path=graph.Dijkstra(start,end);
    let road=path[0];
    for(let i=1;i<path.length;i++)
    {
      road+="->"+path[i];
    }
    console.log(road)
    document.getElementById("result").innerHTML=road; 
  }