import React from "react";

export default function Speaker(props) {
    return (
        <div className="speaker">
            <div className="ad-content">
                <h3>Speaker Series: Speaker Annoucement Soon</h3>
                <div className="date-and-time b-blue center">
                    <p className="center">
                        Topic of this event will be Diversity, Equity, and Inclusion in the
                        Community College Classroom
                    </p>
                    <base target="_parent" />
                    <a
                        className="b-orange coming-soon"
                        href="https://pd.cpcc.edu/CPCC/LearnerWeb_PTM.php?ActionID=Enroll&EventID=32234"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Coming February 2021!
                    </a>
                </div>
            </div>
        </div>
    );
}
