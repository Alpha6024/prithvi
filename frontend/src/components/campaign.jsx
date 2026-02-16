import { Heart, MessageCircle, Share2, Plus, Home, Target,Trophy, User,ArrowLeft ,Users,TrendingUp, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CampaignDetails() {
    const navigate=useNavigate()
  const updates = [
    {
      id: 1,
      user: {
        name: 'Emma Green',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        time: '2h ago'
      },
      content: 'Planted 2 mangrove saplings this morning! Every act counts. 🌱',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
      likes: 24,
      comments: 5,
      badge: 'Verified'
    },
    {
      id: 2,
      user: {
        name: 'Alex River',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        time: '5h ago'
      },
      content: 'Great weekend cleanup in the local park. Found so much plastic! 😢',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
      likes: 42,
      comments: 8,
      badge: 'Top Fan'
    }
  ];

  const supporters = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <button onClick={()=>navigate("/acc/home")}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-base font-semibold">Campaign Details</h1>
          <button>
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
          alt="Campaign"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          ACTIVE
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-white text-2xl font-bold mb-2">Save The Amazon: <br/>RE-Forestation</h2>
          <p className="text-white text-sm">
            Join our mission to combat deforestation and plant 10,000 trees across endangered Amazon sites. Together, we can restore nature and reverse the impacts of climate change!
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs">Supporters</span>
            </div>
            <div className="text-xl font-bold">1,240+</div>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs">Total Impact</span>
            </div>
            <div className="text-xl font-bold">2.5k+</div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 mb-4">
          <div className="text-xs text-green-700 font-semibold mb-2">CAMPAIGN PROGRESS</div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-green-600">$ 750</span>
            <span className="text-gray-500">/ 10,000</span>
          </div>
          <div className="w-full bg-green-200 rounded-full h-2 mb-3">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '7.5%' }}></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">7.5% to goal</span>
            <span className="text-green-600 font-semibold">89% Goal</span>
          </div>
        </div>

        <button className="w-full bg-green-500 text-white font-bold py-4 rounded-xl mb-4 hover:bg-green-600 transition-colors">
          Join Campaign
        </button>

        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="font-semibold">Community Actions</span>
            </div>
            <div className="flex -space-x-2">
              {supporters.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Supporter"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-semibold">
                +
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {updates.map((update) => (
            <div key={update.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={update.user.avatar}
                    alt={update.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{update.user.name}</span>
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full font-medium">
                        {update.badge}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{update.user.time}</div>
                  </div>
                </div>
                <p className="text-sm mb-3">{update.content}</p>
              </div>
              
              <img
                src={update.image}
                alt="Update"
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4 flex items-center gap-4 border-t border-gray-100">
                <button className="flex items-center gap-1 text-gray-600">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{update.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{update.comments} comments</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
  <div className="flex items-center justify-around py-3">
    <button onClick={()=>navigate("/acc/home")} className="flex flex-col items-center gap-1 text-green-600">
      <Home className="w-6 h-6" />
      <span className="text-xs">Home</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-gray-500">
      <Target className="w-6 h-6" fill="currentColor" />
      <span className="text-xs">Campaign</span>
    </button>
    <button onClick={()=>navigate("/acc/home/post")} className="flex flex-col items-center gap-1 text-gray-500">
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center -mt-6 shadow-lg">
        <Plus className="w-6 h-6 text-white" strokeWidth={3} />
      </div>
    </button>
    <button onClick={()=>navigate("/acc/home/leaderboard")} className="flex flex-col items-center gap-1 text-gray-500">
      <Trophy className="w-6 h-6" />
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