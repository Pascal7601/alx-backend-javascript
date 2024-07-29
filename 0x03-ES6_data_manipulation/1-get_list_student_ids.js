export default function getListStudentIds(ids) {
  if (!Array.isArray(ids)) {
    return [];
  }
  const identity = ids.map((id) => id.id);
  return identity;
}
