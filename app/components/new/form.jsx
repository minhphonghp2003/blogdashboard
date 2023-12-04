

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
import makeAnimated from 'react-select/animated';
import Tags from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import Box from '../shared/box'
import Select from 'react-select';
import { useCallback } from 'react'

const PostMetadataForm = ({ onSubmit, onSave, states, tags, rlists, topics }) => {
    const onChange = ((e, setState) => {
        setState(e.detail.value)
    })
    let tagSettings = {
        enforceWhitelist: true,
        dropdown: {
            enabled: 1,            // show suggestion after 1 typed character
            fuzzySearch: false,    // match only suggestions that starts with the typed characters
            position: 'name',      // position suggestions list next to typed text
        },
    }

    let singleChoiceSettings = {

        enforceWhitelist: true,
        mode: "select"
    }

    let checkCanPost = () => {
        return states.topic.selectedTopic && states.title.title
    }
    return (
        <Box className="bg-slate-100 z-2 text-black">
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
                            <TextField onChange={e => { states.title.setTitle(e.target.value) }} fullWidth label='Title' placeholder='Some awesome title...' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={e => { states.foreword.setForeword(e.target.value) }} fullWidth label='Forewords' placeholder='Any forewords?' />
                        </Grid>
                        <Grid item xs={6}>
                            <label className="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload post image</label>
                            <input onChange={e => { states.image.setImage(e.target.files[0]) }} className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer  :text-gray-400 focus:outline-none :bg-gray-700 :border-gray-600 :placeholder-gray-400" id="file_input" type="file"></input>
                        </Grid>
                        <Grid item xs={6} >
                            <label className="block mb-2 text-sm font-medium text-gray-900" >Tags</label>
                            <Tags
                                className='w-full'
                                settings={tagSettings}  // tagify settings object
                                whitelist={tags.map(e => ({ value: e.name, id: e.id }))}
                                onChange={e => { onChange(e, states.tag.setSelectedTag) }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <label className="block mb-2 text-sm font-medium text-gray-900" >Reading list</label>
                            <Tags
                                className='w-full'
                                settings={singleChoiceSettings}  // tagify settings object
                                whitelist={rlists.map(e => ({ value: e.name, id: e.id }))}
                                onChange={e => { onChange(e, states.rList.setSelectedRList) }}
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <label className="block mb-2 text-sm font-medium text-gray-900" >Topic</label>
                            <Tags
                                className='w-full'
                                settings={singleChoiceSettings}  // tagify settings object
                                whitelist={topics.map(e => ({ value: e.name, id: e.id }))}
                                onChange={e => { onChange(e, states.topic.setSelectedTopic) }}
                            />

                        </Grid>

                    </Grid>
                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions>
                    <button
                        onClick={onSubmit}
                        className={`${checkCanPost() ? "" : "btn-disabled"} btn btn-xs h-[3rem] w-[10rem] bg-[#696cff] text-white`}
                    >
                        Post
                    </button>
                    <Button onClick={onSave} size='large' variant='outlined'>
                        Save
                    </Button>

                </CardActions>
            </form>
        </Box>
    )
}

export default PostMetadataForm
