import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { useEffect, useState } from "react";
import axios from 'axios';

const apiGet = (url: string) => {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const ConvertAudio = () => {
    const [exts, setExts] = useState<Record<string, string>>({});
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        apiGet("https://uniconvert.silentias.ru/api/v1/convert/audio/ext")
            .then(data => setExts(data))
            .catch(err => console.error(err));
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    }
    return (
        <div className="flex flex-col gap-7">
            <h1 className="text-2xl">Выберите файл для загрузки</h1>
            <Input type="file" onChange={handleFileChange}/>
            {file ? (
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите расширение" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Расширения</SelectLabel>
                            {Object.keys(exts).map((key) => (
                                <SelectItem key={key} value={key}>
                                    {key}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                </SelectContent>
                </Select>
            ) : (
                null
            )
            }
            
            <Button>Конвертировать</Button>
        </div>
    )
}