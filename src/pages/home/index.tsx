import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const schema = z.object({
  nom: z.string(),
  nomDeFamille: z.string(),
  entreprise: z.string(),
  email: z.string().email(),
  dateDeNaissance: z.object({
    date: z.string().optional(),
    mois: z.string().optional(),
    année: z.string().optional(),
  }),
});

type FormData = z.infer<typeof schema>;

const SHEET_SIDES = ["right"] as const;

export function HomePage() {
  // const { handleSubmit, register, formState } = useForm<FormData>({
  //   resolver: zodResolver(schema),
  // });

  // function onSubmit(data: any) {
  //   console.log(data);
  // }

  return (
    <>
      <main className="grid grid-col-2 gap-2 items-center justify-center w-full">
          {/* <div className="w-full max-w-2xl bg-white border border-zinc-300 shadow rounded-md p-8">
            <h1 className="text-2xl font-bold text-center">Inscription</h1>
            <form
              className="flex gap-6 flex-col mt-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Nom</Label>
                  <Input type="text" {...register("nom")} />
                  {formState.errors.nom?.message && (
                    <span className="text-red-500 text-xs">
                      {formState.errors.nom?.message}
                    </span>
                  )}
                </div>
                <div>
                  <Label>Nom de Famille</Label>
                  <Input type="text" {...register("nomDeFamille")} />
                  {formState.errors.nomDeFamille?.message && (
                    <span className="text-red-500 text-xs">
                      {formState.errors.nomDeFamille?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>E-mail</Label>
                  <Input type="email" {...register("email")} />
                  {formState.errors.email?.message && (
                    <span className="text-red-500 text-xs">
                      {formState.errors.email?.message}
                    </span>
                  )}
                </div>
                <div>
                  <Label>Entreprise</Label>
                  <Input type="text" {...register("entreprise")} />
                  {formState.errors.entreprise?.message && (
                    <span className="text-red-500 text-xs">
                      {formState.errors.entreprise?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-end">
                <div>
                  <Label>Date de Naissance</Label>
                  <Select {...register("dateDeNaissance.date")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array(31)
                        .fill(1)
                        .map((_, index) => {
                          const value = String(index + 1).padStart(2, "0");

                          return (
                            <SelectItem key={index} value={value}>
                              {value}
                            </SelectItem>
                          );
                        })}
                    </SelectContent>
                  </Select>
                  {formState.errors.dateDeNaissance?.date?.message && (
                    <span className="text-red-500 text-xs">
                      {formState.errors.dateDeNaissance?.date?.message}
                    </span>
                  )}
                </div>
                <div>
                  <Select {...register("dateDeNaissance.mois")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Mois" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array(12)
                        .fill(1)
                        .map((_, index) => {
                          const value = String(index + 1).padStart(2, "0");

                          return (
                            <SelectItem key={index} value={value}>
                              {value}
                            </SelectItem>
                          );
                        })}
                    </SelectContent>
                  </Select>
                  {formState.errors.dateDeNaissance?.mois?.message && (
                    <span className="text-red-500 text-xs">
                      {formState.errors.dateDeNaissance?.mois?.message}
                    </span>
                  )}
                </div>
                <div>
                  <Select {...register("dateDeNaissance.année")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Année" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array(200)
                        .fill(1)
                        .map((_, index) => {
                          const value = String(index + 1901).padStart(2, "0");

                          return (
                            <SelectItem key={index} value={value}>
                              {value}
                            </SelectItem>
                          );
                        })}
                    </SelectContent>
                  </Select>
                  {formState.errors.dateDeNaissance?.année?.message && (
                    <span className="text-red-500 text-xs">
                      {formState.errors.dateDeNaissance?.année?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4 items-center justify-between mt-6">
                <div>
                  <Link to="/">
                    <Button className="w-full'" type="submit">
                      Registre
                    </Button>
                  </Link>
                </div>
                <div>
                  {SHEET_SIDES.map((side) => (
                    <Sheet key={side}>
                      <SheetTrigger asChild>
                        <Button variant="outline">{side}</Button>
                      </SheetTrigger>
                      <SheetContent side={side}>
                        <SheetHeader>
                          <SheetTitle>Edit profile</SheetTitle>
                          <SheetDescription>
                            Make changes to your profile here. Click save when
                            you're done.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Username
                            </Label>
                            <Input
                              id="username"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  ))}
                </div>
              </div>
            </form>
          </div> */}
      </main>
    </>
  );
}
