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

export function Home() {
  const { handleSubmit, register, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="flex items-center justify-center h-screen w-full bg-zinc-100">
      <div className="w-full max-w-2xl bg-white shadow rounded-md p-8">
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
          <div>
            <Link to="/">
              <Button className="mt-8 w-full'" type="submit">
                Registre
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
