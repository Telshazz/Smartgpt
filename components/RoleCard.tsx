"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface RoleCardProps {
  title: string;
  description: string;
  typeformId: string;
  index: number;
}

export function RoleCard({ title, description, typeformId, index }: RoleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10"
    >
      <div className="p-6 flex flex-col gap-4 h-full">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/90">{description}</p>
        <div className="mt-auto pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-white text-background hover:bg-white/90 transition-colors">
                Apply Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] h-[80vh] p-0">
              <div
                data-tf-live={typeformId}
                className="w-full h-full"
              ></div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
}