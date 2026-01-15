
import React from 'react';
import { 
  Home, 
  Search, 
  Settings, 
  User, 
  Bell, 
  Plus, 
  Mail, 
  Camera, 
  Heart, 
  Share2 
} from 'lucide-react';
import { MenuItem } from './types';

export const DEFAULT_ITEMS: MenuItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} />, color: '#3b82f6' },
  { id: 'search', label: 'Search', icon: <Search size={20} />, color: '#10b981' },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} />, color: '#f59e0b' },
  { id: 'profile', label: 'Profile', icon: <User size={20} />, color: '#8b5cf6' },
  { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, color: '#ef4444' },
];

export const ALL_ITEMS: MenuItem[] = [
  ...DEFAULT_ITEMS,
  { id: 'mail', label: 'Messages', icon: <Mail size={20} />, color: '#ec4899' },
  { id: 'camera', label: 'Capture', icon: <Camera size={20} />, color: '#06b6d4' },
  { id: 'heart', label: 'Favorites', icon: <Heart size={20} />, color: '#f43f5e' },
  { id: 'share', label: 'Social', icon: <Share2 size={20} />, color: '#f97316' },
];
