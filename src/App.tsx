import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StudentManagement from "@/components/students/StudentManagement";
import StudentProfile from "@/components/students/StudentProfile";
import ClearanceWorkflow from "@/components/clearance/ClearanceWorkflow";
import GraduationList from "@/components/graduation/GraduationList";
import Finance from "@/components/finance/FinancePayment";
import CeremonyCoordination from "@/components/ceremony/CeremonyCoordination";
import DocumentManagement from "@/components/documents/DocumentManagement";
import AlumniIntegration from "@/components/alumni/AlumniIntegration";
import SystemAdministration from "@/components/admin/SystemAdministration";
import ReportsAnalytics from "@/components/reports/ReportsAnalytics";
import GraduationSettings from "@/components/settings/GraduationSettings";
import { UserProvider } from "@/context/UserContext";
import { StudentProvider } from "@/context/StudentContext";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  // Show welcome toast on initial load
  useEffect(() => {
    toast({
      title: "Welcome to Graduation Management System",
      description: "You are logged in as Administrator",
    });
  }, [toast]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="graduation-theme">
      <UserProvider>
        <StudentProvider>
          <div className="min-h-screen bg-background flex flex-col">
            <Header collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar collapsed={collapsed} />
              <main className="flex-1 overflow-y-auto p-4 md:p-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/students" element={<StudentManagement />} />
                  <Route path="/students/:id" element={<StudentProfile />} />
                  <Route path="/clearance" element={<ClearanceWorkflow />} />
                  <Route path="/graduation-list" element={<GraduationList />} />
                  <Route path="/finance" element={<Finance />} />
                  <Route path="/ceremony" element={<CeremonyCoordination />} />
                  <Route path="/documents" element={<DocumentManagement />} />
                  <Route path="/alumni" element={<AlumniIntegration />} />
                  <Route path="/admin" element={<SystemAdministration />} />
                  <Route path="/reports" element={<ReportsAnalytics />} />
                  <Route path="/settings" element={<GraduationSettings />} />
                  <Route path="*" element={<Dashboard />} />
                </Routes>
              </main>
            </div>
            <Toaster />
          </div>
        </StudentProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;