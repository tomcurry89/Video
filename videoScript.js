window.addEventListener ("DOMContentLoaded", handleWindowLoad)  // comment listener and dom

function handleWindowLoad () {
	var video = document.getElementById ( "video" ); // Returns a reference to the element by its ID
	var playButton = document.getElementById ( "playPause" );
	var muteUnmuteButton = document.getElementById ( "mute" );
	var scrubSlider = document.getElementById ( "seekBar" );
	var volumeSlider = document.getElementById ( "volumeSlider" );
	var fullScreenButton =document.getElementById ( "fullScreen" );
	var curDisplay = document.getElementById ( "durationField" ); 
	var speedVideo = document.getElementById ( "speedVideo" );
	var rewind = document.getElementById ("rewindVid");
	var fastForward = document.getElementById ("forwardVid");
	

	playButton.addEventListener ( "click" , playPauseVideo ); // listener method attaches an event handler to the specified element
	fullScreenButton.addEventListener ("click" , switchFullScreen ); // FULLSCREEN button
	scrubSlider.addEventListener ( "change" , scrubVideo ); // allows user to scrub through the video duration
	scrubSlider.addEventListener( "mousedown", pauseSlider); 
	scrubSlider.addEventListener( "mouseup" , resumeSlider);
	video.addEventListener ( "timeupdate" , movePlaySlider); //updates scrub location to correct time
	video.addEventListener( "durationchange", getDuration);
	volumeSlider.addEventListener ( "change" , setVolume); //Listener and function for my volume slider
	muteUnmuteButton.addEventListener ( "click" , muteUnmute ); //mute capability
	video.addEventListener ( "timeupdate" , updateTime);
	speedVideo.addEventListener ( "change" , pickSpeed);
	
	fastForward.addEventListener("dblclick" , setSpeedSingle);
	fastForward.addEventListener("mouseup" , setSpeedDouble);
	fastForward.addEventListener("mousedown" , setSpeedTriple);
	rewind.addEventListener("click" , setRewind);


	
		function playPauseVideo () // play / pause button
		{
			if ( video.paused === true )
			{
				video.play();
				//toggle button caption
				playButton.innerHTML = "Pause";
			}
			else
			{
				video.pause();
				//toggle button caption
				playButton.innerHTML = "Play";
			} //end else 
		} // end playVideo function
		
		function switchFullScreen () // button to switch video to fullscreen
		{
			if (video.requestFullScreen) // if user requests full screen then go to full screen view
				{
				video.requestFullScreen();
				}
			
			else if (video.mozRequestFullScreen)
				{
				video.mozRequestFullScreen(); //firefox
				}
			
			else if (video.webkitRequestFullScreen)
				{
				video.webkitRequestFullScreen(); //chrome and safari
				}
		 }
	
		function scrubVideo () // slider to move through the video 
		{
			var scrubTime = video.duration * (scrubSlider.value /100 );
			video.currentTime = scrubTime;
		}
		
		function movePlaySlider () // plays video from scrub slider location
		{
			var playBackPoint = ( 100 / video.duration )* video.currentTime ;
			scrubSlider.value = playBackPoint;
		}	
		
		function getDuration  () // show duration of video
		{
			var durationDisplay = document.getElementById ( "durationField" );
			var videoDuration = video.duration; // set our duration variable to actual video duration
		
			
			var minutes = Math.floor(videoDuration / 60);
			var seconds = Math.floor(videoDuration % 60);
			
			if (minutes <10) minutes = "0" + minutes;
			if (seconds <10) seconds = "0" + seconds;
			durationDisplay.value = minutes + ":" + seconds;
		}
		
		function pauseSlider () //pauses the video
		{
			video.pause();
		}
		
		function resumeSlider() // resumes the video
		{
			video.play;
		}
		
		function setVolume() //slider for the video volume
		{
			video.volume = volumeSlider.value / 100; //
		}
		
		function muteUnmute () // mute button
		{
			if ( video.muted === false ) // when "clicked" if the video isn't muted then it becomes muted
			{
				video.muted= true;
				muteUnmuteButton.innerHTML = "Mute";
			}
			
			else
			{
				video.muted= false; // or else it will unmute when clicked
				muteUnmuteButton.innerHTML = "Unmute";
	
			}
				
		}
	
		function updateTime () // display current video time
		{
			var curDisplay = document.getElementById ( "realtimeDuration" );
			var currentTime = video.currentTime; // set our duration variable to actual video duration
		
			var minutes = Math.floor(currentTime / 60);
			var seconds = Math.floor(currentTime % 60); // Math.floor() function returns the largest integer less than or equal to a given number
			
			if (minutes <10) minutes = "0" + minutes; // if minutes is less than 10 then show the amount of minutes played
			if (seconds <10) seconds = "0" + seconds;
			curDisplay.value = minutes + ":" + seconds;
		}
		
		function pickSpeed () // set video playback speed
		{
			video.playbackRate = speedVideo.value; // playbackRate sets or returns current playback speed of audio/video
		}
		
		function setSpeedSingle()
		{
			video.playbackRate = 1;
		}
		
		function setSpeedDouble()
		{
			video.playbackRate = 2;
		}
		
		function setSpeedTriple()
		{
			video.playbackRate = 3;
		}
		
		function setRewind() // sets video time to 0, restarts the video
		{
			video.currentTime = 0;
		}
		
	}
	
	// 640 x 360 15fps

