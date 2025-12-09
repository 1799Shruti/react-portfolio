const students = [
  {
    name: "Aarav Sharma",
    age: 21,
    marks: 85,
    yearOfPassing: 2023,
    email: "aarav.sharma@example.com",
  },
  {
    name: "Sara Kapoor",
    age: 22,
    marks: 78,
    yearOfPassing: 2022,
    email: "sara.kapoor@example.com",
  },
  {
    name: "Rohan Verma",
    age: 20,
    marks: 92,
    yearOfPassing: 2024,
    email: "rohan.verma@example.com",
  },
  {
    name: "Meera Nair",
    age: 23,
    marks: 74,
    yearOfPassing: 2021,
    email: "meera.nair@example.com",
  },
  {
    name: "Kunal Singh",
    age: 22,
    marks: 88,
    yearOfPassing: 2023,
    email: "kunal.singh@example.com",
  },
];

export default function StudentTable() {
  return (
    <div>
      <h2>Student Details</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
            <th>Year of Passing</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.marks}</td>
              <td>{student.yearOfPassing}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
