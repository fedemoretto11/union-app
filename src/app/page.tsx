import { Spinner } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <div className="flex gap-4">
        <Spinner label="Default" color="default" labelColor="foreground"/>
        <Spinner label="Primary" color="primary" labelColor="primary"/>
        <Spinner label="Secondary" color="secondary" labelColor="secondary"/>
        <Spinner label="Success" color="success" labelColor="success"/>
        <Spinner label="Cargando" color="warning" labelColor="warning"/>
        <Spinner label="Cargando" color="danger" labelColor="danger"/>
      </div> 
    </main>
  );
}
