import { io } from 'socket.io-client';

// Connect to the backend socket server
const socket = io('http://localhost:8000');

export default socket;
