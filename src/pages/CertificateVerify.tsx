import { useState } from "react";
import { Search, CheckCircle, XCircle, Award, Calendar, MapPin, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import certificatesData from "@/data/certificates.json";

interface Certificate {
  certificateNumber: string;
  participantName: string;
  courseName: string;
  location: string;
  dateOfIssue: string;
  duration: string;
  remarks: string;
}

const CertificateVerify = () => {
  const [searchName, setSearchName] = useState("");
  const [searchCourse, setSearchCourse] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResult, setSearchResult] = useState<Certificate | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSearchResult(null);
    setSearched(true);

    if (!searchName.trim()) {
      setError("Please enter the participant name");
      return;
    }

    const certificates: Certificate[] = certificatesData.certificates;
    
    const result = certificates.find((cert) => {
      const nameMatch = cert.participantName.toLowerCase().includes(searchName.toLowerCase().trim());
      const courseMatch = !searchCourse.trim() || cert.courseName.toLowerCase().includes(searchCourse.toLowerCase().trim());
      const locationMatch = !searchLocation.trim() || cert.location.toLowerCase().includes(searchLocation.toLowerCase().trim());
      
      return nameMatch && courseMatch && locationMatch;
    });

    if (result) {
      setSearchResult(result);
    }
  };

  const handleReset = () => {
    setSearchName("");
    setSearchCourse("");
    setSearchLocation("");
    setSearchResult(null);
    setSearched(false);
    setError("");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Certificate Verification</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Verify the authenticity of certificates issued by LOGOS Research Technologies
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="page-section bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-6 lg:p-8 card-elevated border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Search Certificate</h2>
              </div>

              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <Label htmlFor="name">Participant Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter full name as on certificate"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="course">Course / Workshop Name</Label>
                  <Input
                    id="course"
                    type="text"
                    placeholder="e.g., FDM 3D Printing Fundamentals"
                    value={searchCourse}
                    onChange={(e) => setSearchCourse(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="location">Location / Institution</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., IIT Delhi"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {error && (
                  <p className="text-destructive text-sm">{error}</p>
                )}

                <div className="flex gap-3 pt-2">
                  <Button type="submit" className="flex-1">
                    <Search className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Button>
                  <Button type="button" variant="outline" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </form>
            </div>

            {/* Search Results */}
            {searched && (
              <div className="mt-8">
                {searchResult ? (
                  <div className="bg-card rounded-xl p-6 lg:p-8 card-elevated border-2 border-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Certificate Verified</h3>
                        <p className="text-sm text-muted-foreground">This certificate is authentic and valid</p>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Certificate Number</p>
                          <p className="font-semibold text-foreground">{searchResult.certificateNumber}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Participant Name</p>
                          <p className="font-semibold text-foreground">{searchResult.participantName}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Course Name</p>
                          <p className="font-semibold text-foreground">{searchResult.courseName}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-semibold text-foreground">{searchResult.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Date of Issue</p>
                          <p className="font-semibold text-foreground">{formatDate(searchResult.dateOfIssue)}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-semibold text-foreground">{searchResult.duration}</p>
                        </div>
                      </div>

                      {searchResult.remarks && (
                        <div className="pt-2 border-t border-border">
                          <p className="text-sm text-muted-foreground">Remarks</p>
                          <p className="text-foreground">{searchResult.remarks}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-card rounded-xl p-6 lg:p-8 card-elevated border border-destructive/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                        <XCircle className="w-7 h-7 text-destructive" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Certificate Not Found</h3>
                        <p className="text-sm text-muted-foreground">
                          No matching certificate found. Please verify the details and try again.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        If you believe this is an error, please contact us at{" "}
                        <a href="mailto:info@logosresearch.tech" className="text-primary hover:underline">
                          info@logosresearch.tech
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="page-section bg-muted">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">How to Verify</h3>
            <p className="text-muted-foreground mb-6">
              Enter the participant's name as it appears on the certificate. 
              For more accurate results, you can also provide the course name 
              and location/institution where the training was conducted.
            </p>
            <div className="bg-card rounded-lg p-4 border border-border inline-block">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> All certificates issued by LOGOS Research Technologies 
                are registered in our verification system. If you encounter any issues, 
                please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateVerify;
