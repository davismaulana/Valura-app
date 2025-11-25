import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeftIcon, 
  CheckCircleIcon, 
  PlayCircleIcon, 
  SpeakerWaveIcon, 
  SpeakerXMarkIcon,
  ArrowsPointingOutIcon,
  Cog6ToothIcon,
  BookmarkIcon,
  DocumentArrowDownIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid';
import { RevealOnScroll } from '../RevealOnScroll';

const VideoPlayer = () => {
  const { id } = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // Mock duration
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [quality, setQuality] = useState('1080p');
  const [showControls, setShowControls] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock Data
  const moduleData = {
    id: '1',
    title: 'Module 1: Foundations of AI',
    description: 'Understanding the core concepts and history of Artificial Intelligence.',
    videos: [
      { id: '1', title: 'Introduction to AI', duration: '15:00', completed: true },
      { id: '2', title: 'History of AI', duration: '20:00', completed: true },
      { id: '3', title: 'Types of AI', duration: '25:00', completed: true },
      { id: '4', title: 'AI vs Machine Learning', duration: '30:00', completed: true },
      { id: '5', title: 'Future of AI', duration: '45:00', completed: false },
    ]
  };

  const currentVideo = moduleData.videos.find(v => v.id === id) || moduleData.videos[4];

  // Handlers
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) videoRef.current.currentTime = time;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Simulate video loading
  useEffect(() => {
    setDuration(900); // 15 minutes mock duration
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-10">
      <Link 
        to="/dashboard/materials"
        className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ChevronLeftIcon className="h-5 w-5 mr-1" />
        Back to Course
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Video Player */}
        <div className="lg:col-span-2 space-y-6">
          <RevealOnScroll>
            <div 
              className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-dark-border shadow-2xl group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Video Element (Mock source) */}
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200&h=800"
                onClick={togglePlay}
              >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                  <PlayCircleIcon className="h-20 w-20 text-white opacity-80 animate-pulse" />
                </div>
              )}

              {/* Custom Controls */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                {/* Progress Bar */}
                <input 
                  type="range" 
                  min="0" 
                  max={duration} 
                  value={currentTime} 
                  onChange={handleSeek}
                  className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer mb-4 accent-primary hover:h-2 transition-all"
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                          <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <PlayCircleIcon className="h-8 w-8" />
                      )}
                    </button>

                    <div className="flex items-center space-x-2 group/volume">
                      <button onClick={toggleMute} className="text-white hover:text-primary transition-colors">
                        {isMuted ? <SpeakerXMarkIcon className="h-6 w-6" /> : <SpeakerWaveIcon className="h-6 w-6" />}
                      </button>
                      <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.1" 
                        value={isMuted ? 0 : volume} 
                        onChange={handleVolumeChange}
                        className="w-0 group-hover/volume:w-20 transition-all h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white"
                      />
                    </div>

                    <span className="text-sm text-gray-300 font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Speed Selector */}
                    <div className="relative group/speed">
                      <button className="text-white hover:text-primary text-sm font-bold px-2 py-1 rounded border border-white/20 hover:border-primary/50 transition-all">
                        {playbackSpeed}x
                      </button>
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/90 rounded-lg p-2 hidden group-hover/speed:block min-w-[80px]">
                        {[0.5, 1, 1.25, 1.5, 2].map(speed => (
                          <button 
                            key={speed}
                            onClick={() => setPlaybackSpeed(speed)}
                            className={`block w-full text-left px-2 py-1 text-sm rounded hover:bg-white/10 ${playbackSpeed === speed ? 'text-primary' : 'text-white'}`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quality Selector */}
                    <button className="text-white hover:text-primary transition-colors">
                      <Cog6ToothIcon className="h-6 w-6" />
                    </button>

                    <button className="text-white hover:text-primary transition-colors">
                      <ArrowsPointingOutIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-white">{currentVideo.title}</h1>
                <button className="flex items-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10">
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  Save Note
                </button>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-6 border-b border-white/10 mb-6">
                {['overview', 'resources', 'notes', 'discussion'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium capitalize transition-colors border-b-2 ${
                      activeTab === tab 
                        ? 'border-primary text-primary' 
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
                {activeTab === 'overview' && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg font-semibold text-white mb-2">About this lesson</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      In this lesson, we explore the fundamental concepts of Artificial Intelligence, tracing its history from the early days of symbolic AI to the modern era of deep learning. We'll cover key definitions, major milestones, and the difference between narrow and general AI.
                    </p>
                    <h3 className="text-lg font-semibold text-white mb-2">Learning Objectives</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Define Artificial Intelligence and its subfields</li>
                      <li>Understand the history and evolution of AI</li>
                      <li>Distinguish between AI, Machine Learning, and Deep Learning</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'resources' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-dark-surface border border-dark-border hover:border-primary/30 transition-colors">
                      <div className="flex items-center">
                        <DocumentArrowDownIcon className="h-8 w-8 text-red-400 mr-3" />
                        <div>
                          <p className="text-white font-medium">Lesson Slides</p>
                          <p className="text-xs text-gray-500">PDF • 2.4 MB</p>
                        </div>
                      </div>
                      <button className="text-primary hover:text-primary-light text-sm font-medium">Download</button>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-dark-surface border border-dark-border hover:border-primary/30 transition-colors">
                      <div className="flex items-center">
                        <DocumentArrowDownIcon className="h-8 w-8 text-blue-400 mr-3" />
                        <div>
                          <p className="text-white font-medium">Source Code</p>
                          <p className="text-xs text-gray-500">ZIP • 1.2 MB</p>
                        </div>
                      </div>
                      <button className="text-primary hover:text-primary-light text-sm font-medium">Download</button>
                    </div>
                  </div>
                )}
                {/* Add other tabs content as needed */}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Sidebar - Playlist */}
        <div className="lg:col-span-1">
          <RevealOnScroll delay={200}>
            <div className="bg-dark-surface rounded-2xl border border-dark-border overflow-hidden shadow-lg sticky top-8">
              <div className="p-6 border-b border-dark-border bg-white/5 backdrop-blur-sm">
                <h2 className="font-bold text-white text-lg">Course Content</h2>
                <p className="text-sm text-gray-400 mt-1">
                  {moduleData.videos.filter(v => v.completed).length} / {moduleData.videos.length} completed
                </p>
                {/* Progress Bar */}
                <div className="mt-3 h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 transition-all duration-500" 
                    style={{ width: `${(moduleData.videos.filter(v => v.completed).length / moduleData.videos.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                {moduleData.videos.map((video, index) => (
                  <button
                    key={video.id}
                    className={`
                      w-full text-left p-4 flex items-start hover:bg-white/5 transition-all border-b border-white/5 last:border-0 group
                      ${video.id === currentVideo.id ? 'bg-primary/10 border-l-4 border-l-primary' : 'border-l-4 border-l-transparent'}
                    `}
                  >
                    <div className="mt-1 mr-3 flex-shrink-0">
                      {video.completed ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      ) : video.id === currentVideo.id ? (
                        <PlayCircleIcon className="h-5 w-5 text-primary animate-pulse" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-gray-600 group-hover:border-gray-400 transition-colors"></div>
                      )}
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors ${video.id === currentVideo.id ? 'text-primary-light' : 'text-gray-300 group-hover:text-white'}`}>
                        {index + 1}. {video.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">{video.duration}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
