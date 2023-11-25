// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'

const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const PostMetadataForm = ({ handleSubmit }) => {
    let [language, setLanguage] = useState([])
    // Handle Select
    const handleSelectChange = event => {
        setLanguage(event.target.value)
    }

    return (
        <Card>
            <CardHeader title='Post Information' titleTypographyProps={{ variant: 'h6' }} />
            <Divider sx={{ margin: 0 }} />
            <form onSubmit={e => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                After giving some information, enjoy editing your post in the below text-editor.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Title' placeholder='Some awesome title...' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Forewords' placeholder='Any forewords?' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-select-label'>Topic</InputLabel>
                                <Select
                                    label='Topic'
                                    defaultValue=''
                                    id='form-layouts-separator-select'
                                    labelId='form-layouts-separator-select-label'
                                >
                                    <MenuItem value='UK'>UK</MenuItem>
                                    <MenuItem value='USA'>USA</MenuItem>
                                    <MenuItem value='Australia'>Australia</MenuItem>
                                    <MenuItem value='Germany'>Germany</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-select-label'>Reading List</InputLabel>
                                <Select
                                    label='Reading list'
                                    defaultValue=''
                                    id='form-layouts-separator-select'
                                    labelId='form-layouts-separator-select-label'
                                >
                                    <MenuItem value='UK'>UK</MenuItem>
                                    <MenuItem value='USA'>USA</MenuItem>
                                    <MenuItem value='Australia'>Australia</MenuItem>
                                    <MenuItem value='Germany'>Germany</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-multiple-select-label'>Tags</InputLabel>
                                <Select
                                    multiple
                                    value={language}
                                    onChange={handleSelectChange}
                                    id='form-layouts-separator-multiple-select'
                                    labelId='form-layouts-separator-multiple-select-label'
                                    input={<OutlinedInput label='Language' id='select-multiple-language' />}
                                >
                                    <MenuItem value='English'>English</MenuItem>
                                    <MenuItem value='French'>French</MenuItem>
                                    <MenuItem value='Spanish'>Spanish</MenuItem>
                                    <MenuItem value='Portuguese'>Portuguese</MenuItem>
                                    <MenuItem value='Italian'>Italian</MenuItem>
                                    <MenuItem value='German'>German</MenuItem>
                                    <MenuItem value='Arabic'>Arabic</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>
                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions>
                    <button
                        onClick={handleSubmit}
                        className="btn btn-xs h-[3rem] w-[10rem] bg-[#696cff] text-white"
                    >
                        Post
                    </button>
                    <Button size='large' variant='outlined'>
                        Save
                    </Button>
                    <Button size='large' color='secondary' variant='outlined'>
                        Cancel
                    </Button>
                </CardActions>
            </form>
        </Card>
    )
}

export default PostMetadataForm
