//your JS code here. If required.
const student = {
	name: 'chhkuli',
}

// Add getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  // Get all keys of the object
  return Object.keys(this);
};

// Test the getKeys() method
const keysArray = student.getKeys();

// Print the result
console.log(keysArray); // Output: chhkuli