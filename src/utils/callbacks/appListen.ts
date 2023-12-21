export default function appListenCb(port: number) {
  return () => console.log(`server listening on port ${port}`);
}
