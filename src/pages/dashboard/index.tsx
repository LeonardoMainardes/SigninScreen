import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarIcon } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Line, LineChart } from "recharts";

const chartData = [
  { month: "January", desktop: 280 },
  { month: "February", desktop: 320 },
  { month: "March", desktop: 200 },
  { month: "April", desktop: 270 },
  { month: "May", desktop: 140 },
  { month: "June", desktop: 180 },
  { month: "July", desktop: 200 },
  { month: "August", desktop: 150 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#000000",
  },
} satisfies ChartConfig;

const columns: ColumnDef<{
  id: string;
  amount: number;
  status: string;
  email: string;
}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

export function Dashboard() {
  const data = [
    {
      id: "1",
      status: "pending",
      email: "ihfdeifg@gmail.com",
      amount: 120,
    },
    {
      id: "2",
      status: "processing",
      email: "djhfbljdhg@gmail.com",
      amount: 150,
    },
    {
      id: "3",
      status: "success",
      email: "sjkhdbfglhgbf@gmail.com",
      amount: 200,
    },
    {
      id: "4",
      status: "failed",
      email: "uaghsdvfuovf@gmail.com",
      amount: 300,
    },
  ];

  return (
    <>
      <main>
        <ScrollArea>
          <div className="flex flex-col gap-8 pr-4">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-bold text-2xl">Tableau de Bord</h1>
              <div className="flex flex-row gap-4 justify-start items-center">
                <Popover>
                  <PopoverTrigger>
                    <button className="text-neutral-500 border px-4 py-2 rounded-md flex items-center gap-2">
                      <CalendarIcon size={20} color="#878787" />
                      Choisir une date
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger>
                    <button className="bg-black text-primary-foreground px-4 py-2 rounded-md">
                      Descendre
                    </button>
                  </PopoverTrigger>
                </Popover>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center max-w-6/12">
              <Card className="w-full h-52 rounded-md">
                <CardHeader>
                  <CardTitle>Membres de l'équipe</CardTitle>
                </CardHeader>
              </Card>
              <Card className="w-full h-52 rounded-md">
                <CardHeader>
                  <CardTitle>Abonné</CardTitle>
                  <h1 className="font-bold text-xl">+2350</h1>
                  <CardDescription>
                    <h1 className="text-xs">
                      +180.1% au cours des derniers mois
                    </h1>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={chartConfig}
                    title="Minutes d'exercice"
                    className="w-full h-[80px]"
                  >
                    <BarChart accessibilityLayer data={chartData}>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Bar
                        dataKey="desktop"
                        fill="var(--color-desktop)"
                        radius={2}
                      />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card className="w-full h-52 rounded-md">
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                  <h1 className="font-bold text-xl">$15,231.89</h1>
                  <CardDescription>
                    <h1 className="text-xs">+20.1% le mois dernier</h1>
                  </CardDescription>
                </CardHeader>
                <ChartContainer
                  config={chartConfig}
                  className="w-full h-[70px]"
                >
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 20,
                      right: 20,
                      top: 10,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="desktop"
                      type="natural"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={{
                        fill: "var(--color-desktop)",
                      }}
                      activeDot={{
                        r: 6,
                      }}
                    />
                  </LineChart>
                </ChartContainer>
              </Card>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <Card className="w-6/12 h-52 rounded-md">
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
              </Card>
              <Card className="w-full h-52 rounded-md">
                <CardHeader>
                  <CardTitle>Minutes d'exercice</CardTitle>
                  <div>
                    <h1>
                      Vos minutes d’exercice sont plus longues que d’habitude.
                    </h1>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <Card className="w-full h-52 rounded-md">
                <DataTable columns={columns} data={data} />
              </Card>
              <Card className="w-6/12 h-52 rounded-md"></Card>
            </div>
          </div>
        </ScrollArea>
      </main>
    </>
  );
}
