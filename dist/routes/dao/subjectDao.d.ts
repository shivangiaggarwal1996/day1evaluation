declare function addSubject(name: string, courseId: Number): Promise<{} | undefined>;
declare function getSubjects(): Promise<{}[] | undefined>;
declare function getSubjectsOfId(id: Number): Promise<{} | null | undefined>;
export { addSubject, getSubjects, getSubjectsOfId };
