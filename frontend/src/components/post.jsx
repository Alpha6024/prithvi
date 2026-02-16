import { ArrowLeft, Camera, MapPin, Hash, Users, Trees, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [uploading, setUploading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(85);
  const navigate=useNavigate()

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <div className="bg-white sticky top-0 z-10 border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <button onClick={()=>navigate("/acc/home")} className="text-gray-700">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold">New Action</h1>
          <button className="text-green-600 font-semibold text-sm">
            Drafts
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <Camera className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-sm">Capture Your Impact</span>
            <span className="ml-auto text-xs text-gray-500">REQUIRED</span>
          </div>
          
          <div className="bg-gray-100 rounded-xl h-32 flex flex-col items-center justify-center relative">
            {uploading && (
              <div className="absolute inset-0 bg-white bg-opacity-95 rounded-xl flex flex-col items-center justify-center">
                <div className="text-sm font-medium mb-2">Uploading Image...</div>
                <div className="w-48 bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600">{uploadProgress}%</div>
                <button className="text-xs text-gray-500 mt-2 underline">Cancel</button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
          <label className="block text-sm font-semibold mb-2">
            Tell the community what happened!
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
            placeholder="e.g. Spent the morning planting 50 native saplings in Oakwood Park! #Reforestation"
          ></textarea>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
          <label className="block text-sm font-semibold mb-3">
            What kind of action was it?
          </label>
          <div className="relative">
            <select className="w-full border border-gray-200 rounded-xl p-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-500">
              <option>Select Action Type...</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
          <label className="block text-sm font-semibold mb-3">
            Impact Data
          </label>
          
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-600 mb-1 uppercase tracking-wide">Quantity</div>
              <div className="flex items-center gap-2 text-sm">
                <Trees className="w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. 50 trees" 
                  className="flex-1 border-b border-gray-200 py-1 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-600 mb-1 uppercase tracking-wide">Participants</div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Total 12" 
                  className="flex-1 border-b border-gray-200 py-1 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
          <label className="block text-sm font-semibold mb-3">
            Location
          </label>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search address or park name..." 
              className="flex-1 text-sm border-b border-gray-200 py-1 focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
          <label className="block text-sm font-semibold mb-3">
            Add Tags
          </label>
          <div className="flex items-center gap-2 mb-3">
            <Hash className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Separate with spaces" 
              className="flex-1 text-sm border-b border-gray-200 py-1 focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-100 px-3 py-1 rounded-full">#Sustainability</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">+ #EcoFriendly</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">+ #Sustainability</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">+ #ClimateA...</span>
          </div>
        </div>

        <button className="w-full bg-green-500 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:bg-green-600 transition-colors">
          <CheckCircle className="w-5 h-5" />
          Post My Action
        </button>

        <div className="text-center">
          <button className="text-xs text-gray-400 underline">
            Need Help?
          </button>
          <p className="text-xs text-gray-400 mt-1">
            Follow $PAW X SocialImpact's guidelines
          </p>
        </div>
      </div>
    </div>
  );
}