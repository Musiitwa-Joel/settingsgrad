import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CheckCircle,
  Clock,
  GraduationCap,
  Save,
  Settings,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

export default function GraduationSettings() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    graduationDate: "2025-06-15",
    clearanceStartDate: "2025-03-01",
    clearanceDeadline: "2025-05-15",
    academicYear: "2024/2025",
    graduatingClass: "Class of 2025",
    allowLateSubmissions: true,
    requireDocumentVerification: true,
    automaticClearance: false,
    minimumGPA: "2.0",
    ceremonyVenue: "University Grand Hall",
    maxAttendees: "1200",
  });

  const handleSaveSettings = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Settings Saved",
        description: "Graduation settings have been updated successfully.",
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Graduation Settings
        </h2>
        <Button onClick={handleSaveSettings} disabled={isLoading}>
          {isLoading ? (
            <Clock className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Save Changes
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Important Dates
            </CardTitle>
            <CardDescription>
              Set key dates for the graduation process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="graduationDate">Graduation Ceremony Date</Label>
              <Input
                id="graduationDate"
                type="date"
                value={settings.graduationDate}
                onChange={(e) =>
                  setSettings({ ...settings, graduationDate: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clearanceStartDate">
                Clearance Process Start Date
              </Label>
              <Input
                id="clearanceStartDate"
                type="date"
                value={settings.clearanceStartDate}
                onChange={(e) =>
                  setSettings({ ...settings, clearanceStartDate: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clearanceDeadline">Clearance Deadline</Label>
              <Input
                id="clearanceDeadline"
                type="date"
                value={settings.clearanceDeadline}
                onChange={(e) =>
                  setSettings({ ...settings, clearanceDeadline: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Graduation Class
            </CardTitle>
            <CardDescription>
              Configure graduation class settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="academicYear">Academic Year</Label>
              <Select
                value={settings.academicYear}
                onValueChange={(value) =>
                  setSettings({ ...settings, academicYear: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select academic year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024/2025">2024/2025</SelectItem>
                  <SelectItem value="2023/2024">2023/2024</SelectItem>
                  <SelectItem value="2022/2023">2022/2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="graduatingClass">Graduating Class</Label>
              <Select
                value={settings.graduatingClass}
                onValueChange={(value) =>
                  setSettings({ ...settings, graduatingClass: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select graduating class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Class of 2025">Class of 2025</SelectItem>
                  <SelectItem value="Class of 2024">Class of 2024</SelectItem>
                  <SelectItem value="Class of 2023">Class of 2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="minimumGPA">Minimum GPA Requirement</Label>
              <Input
                id="minimumGPA"
                type="number"
                step="0.1"
                min="0"
                max="4"
                value={settings.minimumGPA}
                onChange={(e) =>
                  setSettings({ ...settings, minimumGPA: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Ceremony Settings
            </CardTitle>
            <CardDescription>
              Configure ceremony and venue details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ceremonyVenue">Ceremony Venue</Label>
              <Input
                id="ceremonyVenue"
                value={settings.ceremonyVenue}
                onChange={(e) =>
                  setSettings({ ...settings, ceremonyVenue: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxAttendees">Maximum Attendees</Label>
              <Input
                id="maxAttendees"
                type="number"
                value={settings.maxAttendees}
                onChange={(e) =>
                  setSettings({ ...settings, maxAttendees: e.target.value })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Clearance Rules
            </CardTitle>
            <CardDescription>
              Set rules for the clearance process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Allow Late Submissions</Label>
                <p className="text-sm text-muted-foreground">
                  Accept clearance submissions after deadline
                </p>
              </div>
              <Switch
                checked={settings.allowLateSubmissions}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, allowLateSubmissions: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Document Verification</Label>
                <p className="text-sm text-muted-foreground">
                  Require verification of submitted documents
                </p>
              </div>
              <Switch
                checked={settings.requireDocumentVerification}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, requireDocumentVerification: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Automatic Clearance</Label>
                <p className="text-sm text-muted-foreground">
                  Auto-clear students meeting all requirements
                </p>
              </div>
              <Switch
                checked={settings.automaticClearance}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, automaticClearance: checked })
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}