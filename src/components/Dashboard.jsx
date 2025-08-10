// components/Dashboard.jsx
import React from 'react';
import { User, Award, Activity, BookOpen, Users, Clock, TrendingUp, FileText, Star } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top Row - Profile & Assessment */}
      <div className="grid grid-cols-2 gap-4">
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <User className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm text-blue-700 font-medium">Profile</span>
          </div>
          <h3 className="font-bold text-gray-800 mb-1">J. Bajaj</h3>
          <p className="text-xs text-blue-600 mb-1">3 years exp.</p>
          <p className="text-xs text-gray-600">ID: HC-2892</p>
        </div>

        {/* Assessment Level */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Award className="w-5 h-5 text-blue-700 mr-2" />
              <span className="text-sm text-blue-800 font-medium">Level</span>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">3</span>
            </div>
          </div>
          <p className="text-xs text-blue-700 mb-1">Senior Caregiver</p>
          <p className="text-xs text-gray-600">Advanced Care</p>
        </div>
      </div>

      {/* Middle Row - Streaks */}
      <div className="grid grid-cols-2 gap-4">
        {/* Current Streak */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <Activity className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm text-blue-700 font-medium">Current Streak</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-800 mb-1">12</p>
            <p className="text-xs text-gray-600">days active</p>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2 mt-3">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
        </div>

        {/* Best Streak */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <Star className="w-5 h-5 text-blue-700 mr-2" />
            <span className="text-sm text-blue-800 font-medium">Best Streak</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-900 mb-1">28</p>
            <p className="text-xs text-gray-600">days record</p>
          </div>
          <p className="text-xs text-blue-700 text-center mt-2">🏆 Personal best</p>
        </div>
      </div>

      {/* Bottom Row - Activity Stats */}
      <div className="grid grid-cols-2 gap-4">
        {/* Journal Entries */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm text-blue-700 font-medium">Journals</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-800 mb-1">47</p>
          <p className="text-xs text-gray-600">entries this month</p>
          <div className="flex items-center mt-2">
            <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
            <span className="text-xs text-green-600">+12%</span>
          </div>
        </div>

        {/* Current Patients */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-700 mr-2" />
              <span className="text-sm text-blue-800 font-medium">Active Now</span>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-2xl font-bold text-blue-900 mb-1">3</p>
          <p className="text-xs text-gray-600">patients assigned</p>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
        <div className="flex items-center mb-3">
          <Clock className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-sm text-blue-700 font-medium">Today's Activity</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Peak hours</span>
            <span className="text-xs font-medium text-blue-800">2-4pm</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
          </div>
          <p className="text-xs text-blue-600 mt-2">Best time to complete assessments</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6">
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white rounded-xl py-3 px-4 font-medium hover:bg-blue-700 transition-colors">
            Record Patient Vitals
          </button>
          <button className="w-full bg-blue-100 text-blue-700 rounded-xl py-3 px-4 font-medium hover:bg-blue-200 transition-colors">
            Start New Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;