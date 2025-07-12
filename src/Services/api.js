export async function request(url, method, data) {
  const token = localStorage.getItem("token"); // or sessionStorage, or another source

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // add header if token exists
    },
  };

  if (method !== "GET" && data) {
    options.body = JSON.stringify(data);
  }

  if (method === "GET" && data) {
    const params = new URLSearchParams(data).toString();
    url += `?${params}`;
  }

  const res = await fetch("http://localhost:8000/api/" + url, options);

  return res;
}

// API function to fetch all available courses
export const fetchCourses = async () => {
  try {
    const response = await request("courses", "GET");
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    
    // Check if the response has the expected structure
    if (!data.status || !data.courses) {
      throw new Error('Invalid response format');
    }
    
    return data.courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// API function to check conflicts for selected courses
export const checkConflicts = async (selectedCourseIds) => {
  try {
    const response = await request("courses/check-conflicts", "POST", {
      courseIds: selectedCourseIds
    });
    if (!response.ok) {
      throw new Error('Failed to check conflicts');
    }
    const data = await response.json();
    
    // Check if the response has the expected structure
    if (!data.status) {
      throw new Error('Invalid response format');
    }
    
    return data;
  } catch (error) {
    console.error('Error checking conflicts:', error);
    throw error;
  }
};
