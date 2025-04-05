import React, { useState } from "react"
import { Card } from "../../ui/card"
import { useGetMissingPeopleQuery } from "../../../model/services"
import { CardSkeleton } from "../../ui/card/skeleton"
import Pagination from "../../ui/pagination"
import { useNavigate } from "react-router-dom"
import { Filter, ValueProps } from "../../molecule/filter"
import { Filters } from "../../../model/services/types"
import { EmptyMessage } from "../../molecule/empty"

const DEFAULT_INITIAL_PAGE = 1
const DEFAULT_PER_PAGE = 10
export const ListMissing = () => {
    const navigate = useNavigate()
    const [actualPage, setActualPage] = useState(DEFAULT_INITIAL_PAGE)
    const [filtersApplyed, setFiltersApplied] = useState<Filters | null>(null)
    const { data, isLoading, isError } = useGetMissingPeopleQuery({ page: actualPage, perPage: DEFAULT_PER_PAGE, ...filtersApplyed })

    const handlePrepareFilter = (value: Omit<ValueProps, ' porPagina'>) => {
        setFiltersApplied({
            name: value.text,
            startAge: Number(value.initialAge),
            endAge: Number(value.finalAge),
            gender: value.gender || '',
            status: value.status || '',
            page: DEFAULT_INITIAL_PAGE
        })
    }
    if (isLoading) {
        return <div className="flex flex-col gap-4 py-4">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    }
    return (
        <div className="flex flex-col gap-4 py-4 w-full">
            <Filter handleSubmit={handlePrepareFilter} handleClear={() => handlePrepareFilter({ finalAge: '', gender: '', initialAge: '', status: '', text: '' })} />
            {data?.empty && <EmptyMessage />}
            <div className="flex flex-col gap-4 md:flex-row flex-wrap w-full md:grid md:grid-cols-5 ">
                {data?.content?.map(people => <Card key={people.id} {...people} handlePress={() => {
                    navigate(`/${people.id}`)
                }} />)}
            </div>
            {
                !data?.empty &&
                <Pagination currentPage={actualPage} totalPages={data?.totalPages || 0} onPageChange={newPage => {
                    window.scrollTo(0, 0)
                    setActualPage(newPage)
                }} />
            }
        </div>
    )
}