import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Play,
  BookOpen
} from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "programming", name: "Programming" },
    { id: "web-dev", name: "Web Development" },
    { id: "data-science", name: "Data Science" },
    { id: "mobile", name: "Mobile Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Digital Marketing" }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete React Development Bootcamp",
      description: "Master React from basics to advanced concepts with hooks, context, and modern patterns",
      price: "₹2,999",
      originalPrice: "₹4,999",
      rating: 4.8,
      students: 12500,
      duration: "40 hours",
      level: "Beginner to Advanced",
      category: "web-dev",
      instructor: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      topics: ["React Hooks", "State Management", "Redux", "Testing"]
    },
    {
      id: 2,
      title: "Python for Data Science & Machine Learning",
      description: "Complete Python course covering pandas, numpy, matplotlib, and scikit-learn",
      price: "₹3,499",
      originalPrice: "₹5,999",
      rating: 4.9,
      students: 8750,
      duration: "35 hours",
      level: "Beginner",
      category: "data-science",
      instructor: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      topics: ["Pandas", "NumPy", "Machine Learning", "Data Visualization"]
    },
    {
      id: 3,
      title: "Digital Marketing Mastery Course",
      description: "Complete guide to digital marketing including SEO, social media, and PPC advertising",
      price: "₹2,499",
      originalPrice: "₹3,999",
      rating: 4.7,
      students: 15200,
      duration: "30 hours",
      level: "All Levels",
      category: "marketing",
      instructor: "Amit Patel",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      topics: ["SEO", "Social Media", "PPC", "Content Marketing"]
    },
    {
      id: 4,
      title: "Full Stack JavaScript Development",
      description: "Learn MERN stack development with MongoDB, Express, React, and Node.js",
      price: "₹4,999",
      originalPrice: "₹7,999",
      rating: 4.8,
      students: 6800,
      duration: "60 hours",
      level: "Intermediate",
      category: "web-dev",
      instructor: "Vikram Singh",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      topics: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      id: 5,
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles, Figma, and create beautiful user interfaces",
      price: "₹1,999",
      originalPrice: "₹3,499",
      rating: 4.6,
      students: 9200,
      duration: "25 hours",
      level: "Beginner",
      category: "design",
      instructor: "Sneha Reddy",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
      topics: ["Design Principles", "Figma", "Prototyping", "User Research"]
    },
    {
      id: 6,
      title: "Android App Development with Kotlin",
      description: "Build modern Android applications using Kotlin and Android Studio",
      price: "₹3,999",
      originalPrice: "₹6,499",
      rating: 4.7,
      students: 5400,
      duration: "45 hours",
      level: "Intermediate",
      category: "mobile",
      instructor: "Arjun Mehta",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=250&fit=crop",
      topics: ["Kotlin", "Android Studio", "Material Design", "Firebase"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our Courses
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Discover over 200+ courses designed by industry experts to help you master in-demand skills
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for courses, skills, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-8">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Filter Courses</h3>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {filteredCourses.length} Courses Found
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="border border-border rounded-md px-3 py-1 text-sm bg-background">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="group hover:shadow-large transition-all duration-300 border-0 shadow-medium">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      {course.level}
                    </Badge>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                    <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-muted-foreground">({course.students.toLocaleString()})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.topics.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-foreground">{course.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                      </div>
                      <Button variant="default" size="sm">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;