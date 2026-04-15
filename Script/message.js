import {chnageTheme, clickTheme } from "./utils/changeTheme.js";
import { statusCount } from "./utils/portfolio.js";
chnageTheme();
clickTheme();
statusCount();

const statusView = document.querySelector('.stat-click');
statusView.addEventListener('click', () => {
  const statView = document.querySelector('.status-view');
  const stat = document.querySelector('.stat');
  const iconChange = document.querySelector('.stat-click');
  if (statView.classList.contains('status-open')) {
    statView.classList.remove('status-open')
    iconChange.classList.remove('icon-down');
    stat.classList.remove('stat-in')
  } else {
    statView.classList.add('status-open')
    iconChange.classList.add('icon-down');
    stat.classList.add('stat-in')
  }
  
})

const message = document.getElementById('message-input');
const sendMessageBtn = document.querySelector('.send-btn')
const voiceNote = document.querySelector('.voice-note')
message.addEventListener('input', () => {
  message.style.height = '30px';
  message.style.height = (message.scrollHeight - 10) + 'px';
  if (message.scrollHeight > 250) {
    message.style.height = '250px';
    message.style.overflowY = 'auto';
  } else {
    message.style.overflowY = 'hidden';
  }
  if (message.value.trim()) {
    sendMessageBtn.classList.add('show-btn')
    voiceNote.classList.add('remove-voice-note')
    document.querySelector('.tools').style.gap = '0';
  } else {
    sendMessageBtn.classList.remove('show-btn')
    voiceNote.classList.remove('remove-voice-note')
    document.querySelector('.tools').style.gap = '20px';
  }
})/* 
voiceNote.addEventListener('transitionend', () => {
  if (voiceNote.classList.contains('remove-voice-note')) {
    voiceNote.style.display = 'none'
  } else {
    voiceNote.style.display = 'flex';
  }
}) */