import { StudentProfile } from '@/components/student-profile';

export default function StudentProfilePage({ params }: { params: { id: string } }) {
  return <StudentProfile studentId={params.id} />;
}
