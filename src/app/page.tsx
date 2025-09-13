import { Switch } from "@/components/ui/Switch";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="row">
          <span>Normal switch:</span> <Switch />
        </div>
        <div className="row">
          <span>Disabled switch: </span>
          <Switch disabled />
        </div>
        <div className="row">
          <span>Default checked switch:</span> <Switch defaultChecked />
        </div>
        <div className="row">
          <span>Default checked disabled switch:</span>
          <Switch disabled defaultChecked />
        </div>
      </div>
    </div>
  );
}
