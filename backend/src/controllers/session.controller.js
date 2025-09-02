// Set a value in the session
export function setUserSession(req, res) {
  req.session.user = { id: 123, name: 'Alice' };
  res.json({ message: 'Session set!', user: req.session.user });
}

// Get the value from the session
export function getUserSession(req, res) {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(404).json({ error: 'No user in session' });
  }
}

// Destroy the session
export function destroySession(req, res) {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: 'Failed to destroy session' });
    res.json({ message: 'Session destroyed' });
  });
}