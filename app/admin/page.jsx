import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Film,
  Users,
  MessageSquare,
  Eye,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";


export default function AdminDashboard() {

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to the CineScope admin dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Movies</CardTitle>
            <Film className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"></div>
            <p className="text-muted-foreground text-xs">
              published
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"></div>
            <p className="text-muted-foreground text-xs">
              users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Reviews
            </CardTitle>
            <MessageSquare className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"></div>
            <p className="text-muted-foreground text-xs">
              approved reviews
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85.4K</div>
            <p className="text-muted-foreground text-xs">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border-primary/20 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-colors">
                <div className="bg-primary/10 rounded-full p-2">
                  <Film className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Add New Movie</h3>
                  <p className="text-muted-foreground text-sm">
                    Create a new movie entry
                  </p>
                </div>
                <Link href="/admin/movies">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-primary/20 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-colors">
                <div className="bg-primary/10 rounded-full p-2">
                  <MessageSquare className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Moderate Reviews</h3>
                  <p className="text-muted-foreground text-sm">
                    reviews pending
                  </p>
                </div>
                <Link href="/admin/reviews">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-primary/20 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-colors">
                <div className="bg-primary/10 rounded-full p-2">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Manage Users</h3>
                  <p className="text-muted-foreground text-sm">
                    users total
                  </p>
                </div>
                <Link href="/admin/users">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-primary/20 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-colors">
                <div className="bg-primary/10 rounded-full p-2">
                  <TrendingUp className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">View Analytics</h3>
                  <p className="text-muted-foreground text-sm">
                    Platform performance metrics
                  </p>
                </div>
                <Link href="/admin/analytics">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">New movie added</p>
                  <p className="text-muted-foreground text-xs">
                    10 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">User role updated</p>
                  <p className="text-muted-foreground text-xs">
                    30 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">New review submitted</p>
                  <p className="text-muted-foreground text-xs">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">User registered</p>
                  <p className="text-muted-foreground text-xs">2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}