import React from 'react';
import SearchBar from './searchBar';
import youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetails';


class App extends React.Component{

    state={videos: [], selectVideos: null}; 

   componentDidMount(){
     this.onTermSubmit('buildings');
   }

  onTermSubmit=async term => {
     const response = await youtube.get('/search', {
       params:{
         q:term
       }
     });
    this.setState({ videos: response.data.items,
    selectVideos: response.data.items[0] });
  };
    
   onVideoSelect = (video => {
     this.setState({ selectVideos: video });
   });


  render(){
      return(
          <div className='ui  container'>
          <SearchBar onFormSubmit={this.onTermSubmit}/>
         <div className='ui grid'>
         <div className='ui row'>
         <div className='eleven wide column'>
          <VideoDetail video={this.state.selectVideos}/>
          </div>
          <div className='five wide column'>
          <VideoList
          onVideoSelect={this.onVideoSelect} 
           videos={this.state.videos}/>
           </div>
           </div>
           </div>
           </div>
      );
  }
}
export default App;