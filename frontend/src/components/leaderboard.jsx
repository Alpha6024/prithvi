import { Heart, MessageCircle, Share2, Plus, Home, Target, Trophy, User, MapPin, Filter, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Leaderboard() {
    const navigate=useNavigate()
  const topThree = [
    {
      rank: 2,
      name: 'Emma Stone',
      location: 'Tokyo, Japan',
      points: '9,150',
      change: '+5.2%',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      position: 'left'
    },
    {
      rank: 1,
      name: 'Marcus River',
      location: 'San Francisco, CA',
      points: '10,325',
      change: '+7.8%',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      position: 'center'
    },
    {
      rank: 3,
      name: 'Sarah Li',
      location: 'London, UK',
      points: '8,890',
      change: '+3.1%',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      position: 'right'
    }
  ];

  const leaderboardData = [
    { rank: 4, name: 'David Mura', location: 'Berlin, Germany', points: '8,500', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    { rank: 5, name: 'Olivia Fern', location: 'Sydney, Australia', points: '8,200', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop' },
    { rank: 6, name: 'Liam Oliver', location: 'Toronto, Canada', points: '8,100', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' },
    { rank: 7, name: 'Aria Simha', location: 'Mumbai, India', points: '7,850', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop' },
    { rank: 8, name: 'Noah Smith', location: 'Austin, TX', points: '7,680', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop' }
  ];

  const filters = ['Weekly', 'Monthly', 'All Time'];
  const categories = ['Top Ranked', 'Trees Planted', 'Plastic Free', 'Clean Energy'];

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-semibold">Global Leaderboard</h1>
          <button>
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex gap-2 px-4 pb-3 overflow-x-auto">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                index === 0 ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-6 mb-4">
          <div className="flex items-end justify-center gap-4 mb-4">
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <img
                  src={topThree[0].avatar}
                  alt={topThree[0].name}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-400 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  2
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">{topThree[0].name}</div>
                <div className="text-xs text-gray-500">{topThree[0].location}</div>
                <div className="text-lg font-bold text-green-600 mt-1">{topThree[0].points}</div>
                <div className="text-xs text-green-600">{topThree[0].change}</div>
              </div>
            </div>

            <div className="flex flex-col items-center -mt-8">
              <div className="relative mb-2">
                <img
                  src={topThree[1].avatar}
                  alt={topThree[1].name}
                  className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">{topThree[1].name}</div>
                <div className="text-xs text-gray-500">{topThree[1].location}</div>
                <div className="text-xl font-bold text-green-600 mt-1">{topThree[1].points}</div>
                <div className="text-xs text-green-600">{topThree[1].change}</div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <img
                  src={topThree[2].avatar}
                  alt={topThree[2].name}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  3
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">{topThree[2].name}</div>
                <div className="text-xs text-gray-500">{topThree[2].location}</div>
                <div className="text-lg font-bold text-green-600 mt-1">{topThree[2].points}</div>
                <div className="text-xs text-green-600">{topThree[2].change}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
                index === 0 ? 'bg-green-500 text-white' : 'bg-white text-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <span className="text-xs text-gray-500 font-medium">RANK #4</span>
          </div>

          {leaderboardData.map((user, index) => (
            <div key={index} className="flex items-center gap-3 p-4 border-b border-gray-100 last:border-b-0">
              <div className="text-gray-400 font-semibold text-sm w-8">
                #{user.rank}
              </div>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold text-sm">{user.name}</div>
                <div className="text-xs text-gray-500">{user.location}</div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {user.points}
                </div>
                <div className="text-xs text-gray-400">IMPACT SCORE</div>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center py-3 text-gray-400">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 mt-4 flex items-center gap-3 text-white shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
            alt="Your rank"
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <div className="flex-1">
            <div className="text-xs opacity-90">Your Global Rank</div>
            <div className="font-bold text-lg">#234 <span className="text-sm font-normal">Sarah_GreenAction</span></div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">4.2k</div>
            <div className="text-xs opacity-90">Impact Score</div>
          </div>
        </div>
      </div>

       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
  <div className="flex items-center justify-around py-3">
    <button onClick={()=>navigate("/acc/home")} className="flex flex-col items-center gap-1 text-gray-500">
      <Home className="w-6 h-6" />
      <span className="text-xs">Home</span>
    </button>
    <button onClick={()=>navigate("/acc/home/campaign")} className="flex flex-col items-center gap-1 text-gray-500">
      <Target className="w-6 h-6" />
      <span className="text-xs">Campaign</span>
    </button>
    <button onClick={()=>navigate("/acc/home/post")} className="flex flex-col items-center gap-1 text-gray-500">
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center -mt-6 shadow-lg">
        <Plus className="w-6 h-6 text-white" strokeWidth={3} />
      </div>
    </button>
    <button className="flex flex-col items-center gap-1 text-green-600">
      <Trophy className="w-6 h-6" fill="currentColor"/>
      <span className="text-xs">Leaderboard</span>
    </button>
    <button onClick={()=>navigate("/acc/home/profile")} className="flex flex-col items-center gap-1 text-gray-500">
      <User className="w-6 h-6" />
      <span className="text-xs">Profile</span>
    </button>
  </div>
</div>
    </div>
  );
}