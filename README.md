# satellites
## Next steps:
1. Add non-equatorial orbits.
2. Add non-centred orbits.
3. Implement existsLOS(object1,object2)
```
function existsLOS(object1,object2){
 let los = false;
 // See if there is LOS.
 //if there is LOS
      los != los;
  return los ? distance between the two objects : -1
{
```
4. Toggle display orbit ellipse.

 ## A tool to visualise satellites around the Earth based on Three.js.
 - Add satellites.
 - Add ground stations (GS from now on).
 - Get satellite parameters like speed and distance to a GS constantly updated and plotted.
 - Mount the camera on a satellite to see a realistic view from the satellite.
 - Mount the camera on a GS to get a glimpse of the objects flying above a certain location.
 - Easily display the coverage of a satellite on a map.

## Screenshots
### General view
![1](https://user-images.githubusercontent.com/44316116/138673552-678867f4-bff5-4c42-a0c6-57639b6448f0.PNG)
- The left panel form enable the user to add new GSs.
- The right panel allows the user to add new satellites.ç
- Next step is to add support for non-equatorial orbits.

### Added one satellite and one GS
![2](https://user-images.githubusercontent.com/44316116/138673557-456938be-a6fb-4e16-a0a6-4b09b8a93999.PNG)
- Satellites are represented in green.
- GSs are represented as yellow dots on the Earth's surface.


### Constantly updated distance and speed plots
Note: the added satellite is in a circular orbit. Therefore, it's speed is constant.
![3](https://user-images.githubusercontent.com/44316116/138673545-a902f28e-5fd5-43c8-93c0-5c1e3d4ba286.PNG)
- The distance and speed are computed constantly and represented in time series using Plotly.

### Many satellites and real time plotting
![4](https://user-images.githubusercontent.com/44316116/138673549-dc0a3192-a85b-42f2-a3d1-d1c9bd719ff3.PNG)
- Many satellites can be added with almost no apparent effect on performance.

### View when the camera is mounted on an satellite
![5](https://user-images.githubusercontent.com/44316116/138673550-c52e59e3-b98a-4890-b4a1-f3033c759bfc.PNG)

## How it works
### The scene
- It has been created using Three.js, a library for 3D rendering on the browser. 
- Every object in the scene has many parameters and its position can be read and set. 
- Objects can be added, removed and modified.
- The Earth is the reference system's origin in space.
- The Earth rotates.

### The satellite
- Is a Three.js object.
- Each satellite is associated to its own worker, which used the script ball.js.
- Its position is updated constantly by the associated worker.
- Is an element of a list of satellites.
- It can be added and removed.

### The ground station
- Is a Three.js object.
- It represents a point on the Earth's surface at some combination of latitude, longitude and height.
- It's position is updated periodically.
- Is an element of a list of satellites.
- It can be added and removed.

## Resources
- [Three.js](https://threejs.org/)
- [Plotly](https://plotly.com/javascript/)
- Anil Kumar Maini; Vasrsha Agrawal. [Satellite technology. Principles and applications](https://onlinelibrary.wiley.com/doi/book/10.1002/9780470711736). WILEY. 04/09/2010. 9780470660249 
